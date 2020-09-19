import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Content, Picker, Icon } from "native-base";
import { propertiesFetch } from "../../actions";
import { Spinner } from "../common/Spinner";
import PropertyItem from "./PropertyItem";

const PropertyList = (props) => {
  const fetchProperties = async () => {
    const apiCall = await props.propertiesFetch();
  };

  useEffect(() => {
    if (!props.filtered) {
      fetchProperties();
    }
  }, []);

  if (props.loading) {
    return <Spinner size="large" />;
  }

  return (
    <Container>
      <Content>
        <PropertyItem {...props} />
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { listFiltered, loading, filtered } = state.properties;

  return { listFiltered, loading, filtered };
};

// Anytime state updates, connect helper will rerun mapStateToProps to make it available as props in component
export default connect(mapStateToProps, { propertiesFetch })(PropertyList);
