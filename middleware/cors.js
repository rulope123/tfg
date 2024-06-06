import cors from 'cors'

const ACCEPTED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:3000/cita',
    'http://localhost:3000/pedirCita',
    'file:///C:/Users/raulp/Downloads/TFG-20240322T163343Z-001/TFG/Veterinaria/view/pedir_cita.html',
]

export const corsMiddleware = ({acceptedOrigins = ACCEPTED_ORIGINS} = {}) => cors({
    origin:(origin,callback) => {
        
            if(acceptedOrigins.includes(origin) || !origin){
                return callback(null,true)
            }
            return callback(new Error('Not allowed by CORS'))
        }
    })
    