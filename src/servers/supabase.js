import { createClient } from '@supabase/supabase-js'






const supabaseUrl = 'https://dckxnfuchptqdkdmknyy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRja3huZnVjaHB0cWRrZG1rbnl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NzcxNTgsImV4cCI6MjAyMzM1MzE1OH0.IGpQNKIUQgVsybk6LaGpyU9bR1uoWdXa-Qq7-9qVf6A'
const supabase = createClient(supabaseUrl, supabaseKey)



export default supabase;