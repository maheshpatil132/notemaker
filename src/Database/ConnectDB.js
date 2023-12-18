
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = process.env.REACT_APP_Supabase_URL
const supabaseKey = process.env.REACT_APP_Supabase_KEY


export const supabase = createClient(supabaseUrl, supabaseKey)
