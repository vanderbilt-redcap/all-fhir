import { useRouter } from 'vue-router'

export function useError() {
  const router = useRouter()

  function handle(err: unknown, context: string = 'Unknown') {
    console.error(`Error in [${context}]:`, err)

    let message = 'An unexpected error occurred.'

    if (err instanceof Error) {
      message = err.message
    } else if (typeof err === 'string') {
      message = err
    } else if (typeof err === 'object' && err !== null && 'message' in err) {
      message = String((err as any).message)
    }

    router.push({ name: 'error', query: { message } }).catch(() => {})
  }

  return { handle }
}
