import { createClient } from '@supabase/supabase-js'
import { NextApiRequest, NextApiResponse } from 'next';

const supabaseUrl = 'https://ypfphuzmqohychghdehr.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function (req:NextApiRequest, res:NextApiResponse){
    if (req.method !== 'GET') {
        res.status(405).send({ message: 'Only GET requests allowed' })
        return
    }    

    try{
        const id = req.body.id
        let { data: docs, error } = await supabase
        .from('docs')
        .select("*")
        .eq('id', id)
        res.send(docs)

    } catch(err){
        console.log(err)
    }
}