
const { Menu, shell, ipcMain, BrowserWindow } = require('electron');
// 判断是否是mac电脑
const isMac = process.platform === 'darwin';

// 1。顶部菜单
const menuTemplate = [
  {
    label: '文件',
    submenu: [
      {
        label: '新建',
        click: function () {
          console.log('新建');
        }
      },
      {
        label: '打开',
        click: function () {
          console.log('打开');
        }
      },
      {
        label: '保存',
        click: function () {
          console.log('保存');
        }
      },
      {
        type: 'separator'
      },
      {
        label: '打印',
        click: function () {
          console.log('打印');
        }
      },
      {
        label: '退出',
        role: isMac ? 'close' : 'quit'
      }
    ]
  },
  {
    label: '编辑',
    submenu: [
      {
        label: '撤销',
        role: 'undo'
      },
      {
        label: '恢复',
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        label: '截切',
        role: 'cut'
      },
      {
        label: '复制',
        role: 'copy'
      },
      {
        label: '粘贴',
        role: 'paste'
      },
      {
        label: '删除',
        role: 'delete'
      },
      {
        label: '全选',
        role: 'selectall'
      }
    ]
  },
  {
    label: '视图',
    submenu: [
      {
        label: '重新加载',
        role: 'reload'
      },
      {
        label: '缩小',
        role: 'zoomout'
      },
      {
        label: '放大',
        role: 'zoomin'
      },
      {
        label: '重置缩放',
        role: 'resetzoom'
      },
      {
        type: 'separator'
      },
      {
        label: '全屏',
        role: 'togglefullscreen'
      },
    ]
  },
  {
    label: '帮助',
    submenu: [
      {
        label: '关于',
        click: function () {
          shell.openExternal('http://www.baidu.com');
        }
      }
    ]
  }
];

var m = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(m);

// 2。右键菜单
const contextMenuTemplate = [
  {
    label: '撤销',
    role: 'undo'
  },
  {
    label: '恢复',
    role: 'redo'
  },
  {
    type: 'separator'
  },
  {
    label: '截切',
    role: 'cut'
  },
  {
    label: '复制',
    role: 'copy'
  },
  {
    label: '粘贴',
    role: 'paste'
  },
  {
    label: '删除',
    role: 'delete'
  },
  {
    label: '全选',
    role: 'selectall'
  }
];

var contextMenu = Menu.buildFromTemplate(contextMenuTemplate);
// 弹出右键菜单
ipcMain.on('showContextmenu', (e, data) => {
  contextMenu.popup({
    window: BrowserWindow.getFocusedWindow()
  })
})