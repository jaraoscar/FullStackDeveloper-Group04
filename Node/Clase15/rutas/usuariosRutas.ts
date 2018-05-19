import express = require("express")
import { controlador as usuariosCtrl } from "../api/controladores/usuariosControlador"
import { errores } from "../manejadores/errores"

const ruteador = express.Router()

ruteador.get("/", errores.cacheo(usuariosCtrl.listar))
ruteador.post("/", errores.cacheo(usuariosCtrl.insertar))
ruteador.put("/:id", errores.cacheo(usuariosCtrl.actualizar))
ruteador.delete("/:id", errores.cacheo(usuariosCtrl.eliminar))
ruteador.post("/login", errores.cacheo(usuariosCtrl.login))
ruteador.post("/nuevotoken", errores.cacheo(usuariosCtrl.generarNuevoAccessToken))
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