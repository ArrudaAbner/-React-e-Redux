import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import firebase from "../config";

export default class ColecaoCliente implements ClienteRepositorio {
  #conversor = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.getNome,
        idade: cliente.getIdade,
      };
    },

    fromFireStore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): Cliente {
      const dados = snapshot?.data(options);
      return new Cliente(dados.nome, dados.idade, snapshot.id);
    },
  };

  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente?.getId) {
      await this.colecao().doc(cliente.getId).set(cliente);
      return cliente;
    } else {
      const docRef = await this.colecao().add(cliente);
      const doc = await docRef.get();
      return doc.data();
    }
  }

  async excluir(cliente: Cliente): Promise<Cliente> {
    return this.colecao().doc(cliente.getId).delete();
  }

  async obterTodos(): Promise<Cliente[]> {
    const query = this.colecao().get();
    return (await query).docs.map((doc) => doc.data()) ?? [];
  }

  private colecao() {
    return firebase
      .firestore()
      .collection("clientes")
      .withConverter(this.#conversor);
  }
}
