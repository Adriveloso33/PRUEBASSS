import React from "react";

import BadgeDetails from "./BadgeDetails";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import api from "../api";

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId //Gracias a React Router recibimos por Id los datos.
      );

      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    //Manejo de estado.
    if (this.state.loading) {
      //return 'Loading ..............................';
      return <PageLoading />;
    }

    //Manejo de estado.
    if (this.state.error) {
      //return `Error: ${this.state.error.message}`;
      return <PageError error={this.state.error} />;
    }

    //Para no repetir todo el rato "this.state.data".

    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        badge={this.state.data}
      />
    );
  }
}

export default BadgeDetailsContainer;
