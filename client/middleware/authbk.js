export default function ({store, redirect, route}) {
  const userIsLoggedIn = !!store.state.auth.user
  const urlRequiresAuth = /^\/admin(\/|$)/.test(route)
  if (!userIsLoggedIn && urlRequiresAuth) {
    return redirect('/')
  }
  return Promise.resolve()
}