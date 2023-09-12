import RoleModel from "../models/role.js";

const getRoles = async (req, reply) => {
  const roles = await RoleModel.find();
  reply.send({
    count: roles.length,
    roles: roles,
    pagination: "jksdjkffjksd/klsdfksdfkld/sklfskdf?skip=10&take=10",
  });
};

const getRole = async (req, reply) => {
  const { id } = req.params;
  const role = await RoleModel.findById(id);
  reply.code(200).send({ message: `Role complete data`, role });
};

const addRole = async (req, reply) => {
  const body = req.body;
  const role = await RoleModel.create(body);
  reply.code(201).send({ message: `Role has been added`, role });
};

const deleteRole = async (req, reply) => {
  const id = req.params.id;
  const role = await RoleModel.findByIdAndRemove(id).exec();
  reply.code(200).send({ message: `Role ${id} has been removed`, role });
};

const updateRole = async (req, reply) => {
  const id = req.params.id;
  const data = {
    name: req.body.name,
    permissions: req.body.permissions,
  };
  const role = await RoleModel.findByIdAndUpdate(id, data, {
    new: true,
  }).exec();
  reply.code(200).send({ message: `Role ${id} has been updated`, role });
};
const RolesController = {
  getRoles,
  getRole,
  addRole,
  deleteRole,
  updateRole,
};
export default RolesController;
