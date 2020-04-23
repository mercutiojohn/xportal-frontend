module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    // 使用 component 插件实现 Element UI 按需加载
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ],
  comments: false
}
