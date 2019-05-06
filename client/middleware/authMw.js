export default function ({store, redirect, route}) {
  const userIsLoggedIn = !!store.state.auth.user
  const urlRequiresAuth = /^\/admin(\/|$)/.test(route.fullPath)
  const urlRequiresNonAuth = /^\/login(\/|$)/.test(route.fullPath)
  if (!userIsLoggedIn && urlRequiresAuth) {
    return redirect('/')
  }
  // if (userIsLoggedIn && urlRequiresNonAuth) {
  //   return redirect('/admin/news')
  // }
  return Promise.resolve()
}