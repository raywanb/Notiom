import { createClient } from '@supabase/supabase-js'
import { NextApiRequest, NextApiResponse } from 'next';

const supabaseUrl = 'https://ypfphuzmqohychghdehr.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

/*
    POST request 
    requires: email, password, first_name, last_name in request body
    to successfully create a user
*/
export default async function (req:NextApiRequest, res:NextApiResponse){
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }    
    try{
        const {email, password, first_name, last_name} = req.body
        const {error} = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    first_name: first_name,
                    last_name: last_name,
                }
            }

        })
        if (!error){
            const user = supabase.auth.getUser()
            res.status(200)
            res.send("success")
        } else {
            res.status(400)
            res.send(error)
        }
    } catch(err){
        console.log(err)
    }
}