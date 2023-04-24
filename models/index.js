import Propiedad from "./Propiedad.js";
import Precio from "./Precio.js";
import Categoria from "./Categoria.js";
import Usuario from "./Usuario.js";
import Mensaje from "./mensaje.js";

// Precio.hasOne(Propiedad)
Propiedad.belongsTo(Precio, { foreignKey: "precioId" })

// Categoria.hasMany(Propiedad)
Propiedad.belongsTo(Categoria, { foreignKey: "categoriaId" })

// Usuario.hasMany(Propiedad)
Propiedad.belongsTo(Usuario, { foreignKey: "usuarioId" })

Propiedad.hasMany(Mensaje, { foreignKey: "propiedadId" })

Mensaje.belongsTo(Propiedad, { foreignKey: "propiedadId" })
Mensaje.belongsTo(Usuario, { foreignKey: "usuarioId" })

export {
    Propiedad,
    Precio,
    Categoria,
    Usuario,
    Mensaje
}