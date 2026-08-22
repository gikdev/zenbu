import { ArrowClockwiseIcon, HouseIcon, SignOutIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { toast } from 'react-toastify'

import { styleBtn } from '#/common/atoms/btn'
import { onError } from '#/common/helpers/onError'
import { Show } from '#/common/helpers/Show'
import { PageShell } from '#/common/molecules/PageShell'
import { Identity, type LoginCommand, type RegisterCommand } from '#/features/api/client' // Just the raw client
import { authStore, useIsLoggedIn } from '#/features/auth/store'
import { useIsRtl } from '#/features/i18n'

import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

const IS_SIGNING_UP_ENABLED = true

export const AccountManagerPage = () => {
  const isRtl = useIsRtl()
  const isLoggedIn = useIsLoggedIn()

  const handleLogOut = () => {
    authStore.actions.logOut()
    toast.success('Successfully logged you out.')
  }

  const handleRefresh = async () => {
    if (!isLoggedIn) return

    const { tokens } = authStore.get()
    if (!tokens) return

    const body = {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    }

    try {
      const res = await toast.promise(Identity.refreshToken({ body, throwOnError: true }), {
        pending: 'Refreshing...',
        success: 'Successfully refreshed.',
        error: 'Refreshing failed.',
      })

      authStore.actions.logIn(res.data)
    } catch (err) {
      // toast.promise handles the error display, but if onError does extra logging:
      onError(err)
    }
  }

  const handleLogin = async (body: LoginCommand) => {
    try {
      const res = await toast.promise(Identity.login({ body, throwOnError: true }), {
        pending: 'Logging you in...',
        success: 'Successfully logged you in.',
        error: 'Login failed.',
      })
      authStore.actions.logIn(res.data)
    } catch (err) {
      onError(err)
    }
  }

  const handleRegister = async (body: RegisterCommand) => {
    try {
      await toast.promise(Identity.register({ body, throwOnError: true }), {
        pending: 'Registration in progress...',
        success: 'Successfully registered. Please log in.',
        error: 'Registration failed.',
      })
    } catch (err) {
      onError(err)
    }
  }

  return (
    <PageShell>
      <div className='flex items-center justify-between gap-1 px-4 py-2'>
        <Link to='/apps' className={styleBtn({ size: 'icon' })}>
          <HouseIcon mirrored={isRtl} size={20} />
        </Link>

        <h1 className='text-text-important me-auto text-lg font-bold'>Account Manager</h1>
      </div>

      <div className='flex flex-col gap-8 px-4 py-8'>
        <Show if={!isLoggedIn}>
          <div className='mx-auto flex w-full max-w-240 flex-col gap-8 md:flex-row'>
            <LoginForm onSubmit={handleLogin} />
            <Show if={IS_SIGNING_UP_ENABLED}>
              <RegisterForm onSubmit={handleRegister} />
            </Show>
          </div>
        </Show>

        <Show if={isLoggedIn}>
          <div className='mx-auto flex w-full max-w-120 flex-col gap-4 text-center'>
            <p className=''>You are currently signed in.</p>

            <button type='button' className={styleBtn({ variant: 'primary', size: 'lg' })} onClick={handleRefresh}>
              <ArrowClockwiseIcon size={20} weight='fill' />
              <span>Refresh</span>
            </button>

            <button type='button' className={styleBtn({ variant: 'outline', size: 'lg' })} onClick={handleLogOut}>
              <SignOutIcon size={20} weight='fill' />
              <span>Sign Out</span>
            </button>
          </div>
        </Show>
      </div>
    </PageShell>
  )
}
