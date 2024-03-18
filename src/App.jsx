import  { Suspense } from 'react'
import {BrowserRouter,RouterProvider} from  'react-router-dom'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { APIProvider } from '@vis.gl/react-google-maps'
import { Toaster } from 'react-hot-toast'
import AnimatedPages from './ui/AnimatedPages'
import Rediced from './ui/Rediced'
import {motion} from 'framer-motion'



// ourania2002!
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRja3huZnVjaHB0cWRrZG1rbnl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NzcxNTgsImV4cCI6MjAyMzM1MzE1OH0.IGpQNKIUQgVsybk6LaGpyU9bR1uoWdXa-Qq7-9qVf6A
// Google Api :  AIzaSyCjsBOlo18ZTRaEkLz3xqmPUoFLFiZ1oLQ

const queryClient = new QueryClient( {
  defaultOptions:{
    stale:0,
  }
} )

function App() {

  return (
  

    <QueryClientProvider client={queryClient}>
    <APIProvider apiKey={'AIzaSyCjsBOlo18ZTRaEkLz3xqmPUoFLFiZ1oLQ'}>
    <BrowserRouter>
      
        <AnimatedPages/>

      </BrowserRouter>
    <Toaster
    position='top-center'  
    gutter={12} 
    containerStyle={{margin:'8px'}}  
    toastOptions={{
    success:{
    duration:3000,
  },
  
  error:{
    duration:500
  },
  style:{
    fontSize: '16px',
    maxWidth: '500px',
    padding : '16px 24px',
    backgroundColor : "var(--color-grey-0)",
    color: "var(--color-grey-700)"
  }
  
}}

/>
    <ReactQueryDevtools initialIsOpen={true} />
    </APIProvider>
    </QueryClientProvider>

  )
}

export default App
