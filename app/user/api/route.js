import connection from "@/app/conexion/bd_conexion";
import { NextResponse } from "next/server";

export async function GET() {
  connection.query(
    // "SELECT * FROM clientes where id_cliente = ? ",
    "SELECT * FROM users where user = ? AND clave = ? ",

    [
      "leidy.huriol@negocia.pe",
      "$2y$10$13mAvVh6R4ZHPUIMAzgHSOZII0jy/Qx83gTM0l3j3ZjRguba0ul0W",
    ],

    function (err, results, fields) {
      var data = results;
      alert(data);
      console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available
    }
  );

  return NextResponse.json({ res: "wilson", response: "10" });
}
