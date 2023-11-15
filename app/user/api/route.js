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
