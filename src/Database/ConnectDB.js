
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = process.env.Supabase_URL
const supabaseKey = process.env.supabase_KEY


export const supabase = createClient(supabaseUrl, supabaseKey)
