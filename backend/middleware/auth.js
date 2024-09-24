import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Token não fornecido, faça o login novamente!" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;  // Verifique se o token contém a propriedade `id`
    next();
  } catch (error) {
    console.log("Erro no authMiddleware:", error.message);
    res.json({ success: false, message: "Erro na autenticação do token" });
  }
};

export default authMiddleware;
