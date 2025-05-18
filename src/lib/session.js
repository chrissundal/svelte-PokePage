import { writable } from 'svelte/store'
import { supabase } from '$lib/supabase.js'

export const session = writable(null)

supabase.auth.getSession().then(({ data: { session: dataSession } }) => {
    session.set(dataSession)
})

supabase.auth.onAuthStateChange((_event, newSession) => {
    session.set(newSession)
})