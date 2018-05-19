import express = require("express")
import { controlador as cinesCtrl } from "../api/controladores/usuariosControlador"
import { errores } from "../manejadores/errores"

const ruteador = express.Router()

ruteador.get("/", errores.cacheo(cinesCtrl.listar))
ruteador.post("/", errores.cacheo(cinesCtrl.insertar))
ruteador.put("/:id", errores.cacheo(cinesCtrl.actualizar))
ruteador.delete("/:id", errores.cacheo(cinesCtrl.eliminar))
//ruteador.get("/", cinesCtrl.listar)



/*function cacheo(ftn) {
	return (rq: Request, rs: Response, nx: NextFunction) => {
		ftn(rq, rs)
			.catch(error => {
				nx(error)
			})
	}
}*/





export { ruteador }