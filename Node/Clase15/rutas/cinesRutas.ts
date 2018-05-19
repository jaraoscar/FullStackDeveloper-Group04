import express = require("express")
import { controlador as cinesCtrl } from "../api/controladores/cinesControlador"
import { errores } from "../manejadores/errores"
import { tokenValido } from "../api/politicas/autenticadoPolitica"

const ruteador = express.Router()

ruteador.get("/:id", errores.cacheo(cinesCtrl.detallar))
ruteador.get("/", tokenValido, errores.cacheo(cinesCtrl.listar))
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