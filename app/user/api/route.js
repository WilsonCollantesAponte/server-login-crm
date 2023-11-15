import connection from "@/app/conexion/bd_conexion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const results = await queryDatabase();
    console.log(results);
    return NextResponse.json({ res: results, response: "10" });
  } catch (error) {
    console.error('Error en la consulta a la base de datos:', error);
    return NextResponse.json({ error: 'Hubo un error en la consulta a la base de datos' });
  }
}

function queryDatabase() {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM users WHERE user = ? AND clave = ?",
      [
        "leidy.huriol@negocia.pe",
        "$2y$10$13mAvVh6R4ZHPUIMAzgHSOZII0jy/Qx83gTM0l3j3ZjRguba0ul0W",
      ],
      function (err, results, fields) {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
}
