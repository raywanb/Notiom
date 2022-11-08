import { createClient } from '@supabase/supabase-js'
import { NextApiRequest, NextApiResponse } from 'next';

const supabaseUrl = 'https://ypfphuzmqohychghdehr.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function (req:NextApiRequest, res:NextApiResponse){
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }    
    try{
        const {email, password} = req.body
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (!error){
            // localStorage.setItem('token', data.session.access_token);
            res.send(data.session.access_token);
        } else {
            console.log(error);
            res.send(error);
        }
    } catch(err){
        console.log(err)
    }
}