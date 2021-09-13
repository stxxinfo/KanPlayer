module.exports = {
  pages: {
    index: 'src/main.js'
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },
        appId: 'com.stxxinfo.kanplayer',
        copyright: 'Copyright @ 2021 vipkankan.net',
        productName: 'KanPlayer',
        directories: {
          "output": "build" // 输出文件夹
        },
        publish: [
          {
            provider: 'github',
            owner: 'stxxinfo',
            repo: 'kanplayer'
          }
        ],
        mac: {
          icon: 'dist_electron/icons/icon.icns',
        },
        win: {
          icon: 'dist_electron/icons/icon.ico',
          target: 'nsis'
        },
        linux: {
          icon: 'dist_electron/icons/'
        },
        snap: {
          publish: ['github']
        }
      }
    }
  }
}
