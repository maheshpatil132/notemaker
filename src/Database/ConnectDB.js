
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://teqpqjmsietmaaxkbbzo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlcXBxam1zaWV0bWFheGtiYnpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1NjEwMTQsImV4cCI6MjAxODEzNzAxNH0.kNmf0fDTgnOw_F-RS8IcGL81foqQ7VGGw5E8CGxf-KE'


export const supabase = createClient(supabaseUrl, supabaseKey)
