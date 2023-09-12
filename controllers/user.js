import UserModel from "../models/user.js";

const getUsers = async (req, reply) => {
  const users = await UserModel.find();
  reply.send({
    count: users.length,
    users: users,
    pagination: "jksdjkffjksd/klsdfksdfkld/sklfskdf?skip=10&take=10",
  });
};

const getUser = async (req, reply) => {
  const { id } = req.params;
  const user = await UserModel.findById(id);
  reply.code(200).send({ message: `User complete data`, user });
};

const addUser = async (req, reply) => {
  const body = req.body; console.log(body);
  const user = await UserModel.create(body);
  reply.code(201).send({ message: `User has been added`, user });
};

const deleteUser = async (req, reply) => {
  const id = req.params.id;
  const user = await UserModel.findByIdAndRemove(id).exec();
  console.log(user);
  reply.code(200).send({ message: `User ${id} has been removed`, user });
};

const updateUser = async (req, reply) => {
  const id = req.params.id;
  const data = {
    f_name: req.body.f_name,
    l_name: req.body.l_name,
    email: req.body.email,
  };
  const user = await UserModel.findByIdAndUpdate(id, data, {
    new: true,
  }).exec();
  reply.code(200).send({ message: `User ${id} has been updated`, user });
};
const UsersController = {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
};
export default UsersController;
