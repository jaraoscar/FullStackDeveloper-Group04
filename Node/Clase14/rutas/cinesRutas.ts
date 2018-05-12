import express = require("express")
import { controlador as cinesCtrl } from "../api/controladores/cinesControlador"
import { errores } from "../manejadores/errores"

const ruteador = express.Router()

ruteador.get("/:id", cinesCtrl.detallar)
ruteador.get("/", errores.cacheo(cinesCtrl.listar))
ruteador.post("/", errores.cacheo(cinesCtrl.insertar))
ruteador.put("/:id", cinesCtrl.actualizar)
ruteador.delete("/:id", cinesCtrl.eliminar)
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