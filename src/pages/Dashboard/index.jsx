import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { block } from "./styles.scss";

import Card from "../../components/Card";

const mockCard = {
  title: "Título",
  description: "Descrição",
  author: "Autor",
};

const Dashboard = ({ className }) => {
  const rootCssClasses = cn(block, className);
  return (
    <div className={rootCssClasses}>
      <div className={`${block}__wrapper`}>
        <Card
          className={`${block}__card`}
          title={mockCard.title}
          description={mockCard.description}
          author={mockCard.author}
        />
        <Card
          className={`${block}__card`}
          title={mockCard.title}
          description={mockCard.description}
          author={mockCard.author}
        />
        <Card
          className={`${block}__card`}
          title={mockCard.title}
          description={mockCard.description}
          author={mockCard.author}
        />
        <Card
          className={`${block}__card`}
          title={mockCard.title}
          description={mockCard.description}
          author={mockCard.author}
        />
        <Card
          className={`${block}__card`}
          title={mockCard.title}
          description={mockCard.description}
          author={mockCard.author}
        />
        <Card
          className={`${block}__card`}
          title={mockCard.title}
          description={mockCard.description}
          author={mockCard.author}
        />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  className: PropTypes.string,
};

Dashboard.defaultProps = {
  className: undefined,
};

export default Dashboard;
