// "use client"/
//  'use client';
import { NextRequest, NextResponse } from "next/server";
// import { db, todoTable } from "@/lib/drizzle"
import { sql } from "@vercel/postgres"
import { NextApiRequest } from "next";
 import { db } from '@vercel/postgres';
// import { NextApiRequest, NextApiResponse } from "next";
// import { useRouter } from 'next/router';
export async function DELETE(request: NextRequest) {
  const client = await db.connect();

  const res = await request.json();
 
  const id = res['id']

      
    if(id) {
      const result = await client.sql`update pets set Name = where id =${id};`;
     } else {
       return NextResponse.json( 'plz inter your id', {
      status: 500,
      
      });
     }
     const p = await client.sql`SELECT * from pets ;`;
    return NextResponse.json({  p });
}   








































  // try {
      // await sql`DELETE FROM Todos WHERE id = 9`;
          //  
      // const res = await db.select().from(todoTable);
      //  {/* @ts-ignore */}
      //  const id = res["ID"]
        // 
        // console.log("vvvvvvvvvvvvvvvvvvvvvvv",res)
        //  {/* @ts-ignore */}
        // console.log(res['ID',"---------==="])
        // return NextResponse.json({ data: res })
// {/* @ts-ignore */}
      // console.log(res['id',"[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[["])
  // } catch (err) {
      // console.log((err as { message: string }).message)
      // return NextResponse.json({ message: "Somthing went wrong" })
  // }
// }

// import { db } from '@vercel/postgres';
// import { NextRequest, NextResponse } from "next/server";
// 
// export async function DELETE(request: NextRequest) {
    // const client = await db.connect();
//  const pets = " "
//  console.log('++++++++++++++++++++',pets)
  // try {
    // const res = await request.json();
  //  
  //  
    // const id = res['id']
    // const NAME = res['NAME']
        // 
  // if(id) {
    // const result = await client.sql`DELETE FROM Todos WHERE id =${id};`;
  // } else {
    // return NextResponse.json( 'plz inter your id', {
        // status: 500,
        // 
      // }); 
  // }
// 
// 
  // const p = await client.sql`DELETE FROM Todos WHERE id =${id}`;
// 
  // return NextResponse.json({  p });
  // }
// 
// 
// 
// 
        // try {
        // const id = res['id']
        // await sql`DELETE FROM Todos WHERE id = 3;`
// 
// 
        //  const res = await db.select().from(todoTable);
        //  console.log("--------------------------------request",res)
        // return NextResponse.json({ data: res })
        //  } catch (err) {
      //  console.log((err as { message: string }).message)
      //  return NextResponse.json({ message: "Somthing went wrong" })
// 
        // }
// 
          //  }