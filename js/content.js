/**
 * Notion Dracula Theme
 * 内容脚本 - 用于动态调整Notion页面元素
 */

(function () {
  'use strict'

  // Dracula主题配色
  const DRACULA = {
    background: '#282a36',
    currentLine: '#44475a',
    foreground: '#f8f8f2',
    comment: '#6272a4',
    cyan: '#8be9fd',
    green: '#50fa7b',
    orange: '#ffb86c',
    pink: '#ff79c6',
    purple: '#bd93f9',
    red: '#ff5555',
    yellow: '#f1fa8c'
  }

  window.addEventListener('load', () => {
    console.log('Notion Dracula Theme: 初始化主题')
    initializeDraculaTheme()
  })

  // 初始化Dracula主题
  function initializeDraculaTheme() {
    // 添加特殊的数据属性而不是类，避免框架冲突
    document.documentElement.setAttribute('data-theme-dracula', 'true')

    // 强制背景色
    document.body.style.setProperty('background-color', DRACULA.background, 'important')
  }
})() 