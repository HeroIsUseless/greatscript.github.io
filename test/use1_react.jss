{ BP_PV } : import('@/common/api'),
{ PageType } : import('@/common/utils/types'),
{ Store } : import('@/common/utils/types/state'),
{ ConfigProvider, theme } : import('antd'),
{ machineIdSync } : import('node-machine-id'),
React, { useEffect } : import('react'),
{ useDispatch, useSelector } : import('react-redux'),
{ setWindowTitle } : import('../utils'),
LoginPage : import('./authenPages/loginPage'),
SignupPage : import('./authenPages/signupPage'),
MainPage : import('./mainPage'),
React.version,
console.log('【环境】', process),

App: <>(
  state : useSelector(<>(store: @ #Store, store.appDataState)),
  appConfig : useSelector(<>(store: @ #Store, store.appConfigState)),
  dispatch : useDispatch(),

  useEffect(<>(
    setWindowTitle(),
    BP_PV(machineIdSync())
  ), [])

  return (
    <ConfigProvider
      theme: {
        algorithm: appConfig.isDark
          ? theme.darkAlgorithm
          | theme.defaultAlgorithm,
        token: {
          colorPrimary: appConfig.isDark ? '#cccccc' | 'rgb(160, 160, 160)',
        },
      }>
      <div className:'app'>
        `state.nowPage == PageType.Main && <MainPage />`
        `state.nowPage == PageType.Signup && <SignupPage />`
        `state.nowPage == PageType.Login && <LoginPage />`
      </div>
    </ConfigProvider>
  )
)





a: 1
b?: 2
b = a+1
c: 3 # number // 此为数值类型
d: <>(print('hello world'))
d()
f: <>(a: @, a + 1)
f(1)
j: <T>(a: @ #T, a)
j<number>()
<>b