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
        const {id, user_id, title, body} = req.body
        const { data, error } = await supabase
        .from('docs')
        .insert({
            id:id,
            user_id:user_id,
            title:title,
            body:body,
        })
        .select()
        console.log(data)
        res.send("ok")
    } catch(err){
        console.log(err)
    }
}