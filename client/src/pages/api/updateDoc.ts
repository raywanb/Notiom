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
        const {id, title, body} = req.body
        let { data: docs, error } = await supabase
        .from('docs')
        .update({body:body, title:title})
        .eq('id', id)
        .select()
        res.send(docs)

    } catch(err){
        console.log(err)
    }
}