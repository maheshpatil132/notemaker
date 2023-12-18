
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = process.env.Supabase_URL
const supabaseKey = process.env.Supabase_KEY


export const supabase = createClient(supabaseUrl, supabaseKey)
