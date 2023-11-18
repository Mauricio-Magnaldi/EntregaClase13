import { dirname }  from "path"
import { fileURLToPath } from "url"
import bcrypt from "bcrypt"

export const __dirname = dirname(fileURLToPath(import.meta.url))

//bcrypt
//Hashear el dato
export const hashData = async (data) => {
    return bcrypt.hash(data,10)
}

//Comparar el dato que ingresan con el dato ya hasheado en la bd.
export const compareData = async (data, hashedData) => {
    return bcrypt.compare(data, hashedData)
}
