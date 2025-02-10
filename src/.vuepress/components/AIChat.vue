<template>
  <div class="ai-chat-container">
    <button 
      class="ai-chat-toggle" 
      @click="isOpen = !isOpen"
      :title="isOpen ? '关闭对话' : '打开对话'"
    >
      <span v-if="!isOpen">AI</span>
      <span v-else>×</span>
    </button>
    
    <div class="ai-chat-widget" v-show="isOpen">
      <div class="ai-chat-messages" ref="messageContainer">
        <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.role]">
          {{ msg.content }}
        </div>
      </div>
      
      <div class="ai-chat-input">
        <textarea 
          v-model="currentMessage" 
          @keyup.enter="sendMessage"
          placeholder="输入问题，回车发送..."
          rows="2"
        ></textarea>
        <button @click="sendMessage">发送</button>
      </div>
    </div>
  </div>
  <div class="ai-chat-test">
    <h3>AI 聊天测试</h3>
    <div class="chat-box">
      <input 
        v-model="message" 
        placeholder="输入测试消息..."
        @keyup.enter="testChat"
      />
      <button @click="testChat">发送测试</button>
    </div>
    <div v-if="response" class="response">
      回复: {{ response }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AIChat',
  data() {
    return {
      isOpen: false,
      currentMessage: '',
      messages: [],
      isWaiting: false,
      message: '',
      response: ''
    }
  },
  methods: {
    async sendMessage(e) {
      if (e.shiftKey) return; // 允许 Shift+Enter 换行
      e.preventDefault();
      
      if (!this.currentMessage.trim() || this.isWaiting) return;
      
      // 添加用户消息
      this.messages.push({
        role: 'user',
        content: this.currentMessage
      });
      
      const userMessage = this.currentMessage;
      this.currentMessage = '';
      this.isWaiting = true;

      try {
        const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer sk-ixiqpwxvoczallrpdlwijnbflakblauirkzxopopbrncicjo',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'deepseek-ai/DeepSeek-V3',
            messages: [{ role: 'user', content: userMessage }],
            frequency_penalty: 0,
            max_tokens: 512,
            n: 1,
            stream: true,
            temperature: 1,
            top_p: 0.7
          })
        });

        if (!response.ok) throw new Error('API 请求失败');

        // 处理流式响应
        this.messages.push({
          role: 'assistant',
          content: ''
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const data = JSON.parse(line.slice(6));
                if (data.choices && data.choices[0]?.message?.content) {
                  this.messages[this.messages.length - 1].content += data.choices[0].message.content;
                }
              } catch (e) {
                console.warn('解析响应数据失败:', e);
              }
            }
          }
        }

      } catch (error) {
        console.error('发送消息失败:', error);
        this.messages.push({
          role: 'system',
          content: '发送消息失败，请稍后重试'
        });
      } finally {
        this.isWaiting = false;
        this.$nextTick(() => {
          if (this.$refs.messageContainer) {
            this.$refs.messageContainer.scrollTop = this.$refs.messageContainer.scrollHeight;
          }
        });
      }
    },
    testChat() {
      this.response = '测试消息：' + this.message;
      this.message = '';
    }
  }
}
</script>

<style scoped>
.ai-chat-container {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
}

.ai-chat-toggle {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: var(--theme-color);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  right: 0;
  bottom: 0;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}

.ai-chat-widget {
  position: absolute;
  right: 0;
  bottom: 70px;
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.ai-chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.message {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  max-width: 80%;
}

.message.user {
  background: #e3f2fd;
  margin-left: auto;
}

.message.assistant {
  background: #f5f5f5;
  margin-right: auto;
}

.message.system {
  background: #ffebee;
  margin: 10px auto;
  text-align: center;
}

.ai-chat-input {
  padding: 10px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 10px;
}

.ai-chat-input textarea {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 8px;
  resize: none;
}

.ai-chat-input button {
  padding: 0 20px;
  background: var(--theme-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.ai-chat-input button:hover {
  opacity: 0.9;
}

.ai-chat-test {
  border: 2px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
}

.chat-box {
  margin: 10px 0;
}

input {
  padding: 5px;
  margin-right: 10px;
}

button {
  padding: 5px 10px;
}

.response {
  margin-top: 10px;
  padding: 10px;
  background: #f0f0f0;
  border-radius: 4px;
}
</style>