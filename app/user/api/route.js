// import connection from "@/app/conexion/bd_conexion";
// import { NextResponse } from "next/server";

// export async function GET() {
//   const allUsers = {};

//   connection.query(
//     // "SELECT * FROM clientes where id_cliente = ? ",
//     "SELECT * FROM users where user = ? AND clave = ? ",

//     [
//       "leidy.huriol@negocia.pe",
//       "$2y$10$13mAvVh6R4ZHPUIMAzgHSOZII0jy/Qx83gTM0l3j3ZjRguba0ul0W",
//     ],

//     function (err, results, fields) {
//       allUsers.res = results;
//       console.log(results); // results contains rows returned by server
//       // console.log(fields); // fields contains extra meta data about results, if available
//     }
//   );

//   return NextResponse.json({ res: "wilson", response: allUsers });
// }

import connection from "@/app/conexion/bd_conexion";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { user, clave } = await request.json();

  try {
    const results = await queryDatabase(user, clave);
    console.log(results);
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error en la consulta a la base de datos:", error);
    return NextResponse.json({
      error: "Hubo un error en la consulta a la base de datos",
    });
  }
}

function queryDatabase(user, clave) {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM users WHERE user = ? AND clave = ?",
      [user, clave],
      // function (err, results, fields) {
      function (err, results) {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
}

// Enviar mensaje a PRE-NEGOCIA - CRM
