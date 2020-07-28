import React from "react";
import UserCategoryCard from "../components/UserCategoryCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { DragDropContext } from "react-beautiful-dnd";

export default class UserCategoriesContainer extends React.Component {
  constructor(props) {
    console.log(props, "hello");
    super(props);
    this.state = {
      userSchools: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.schools !== prevProps.data.schools) {
      this.setState({
        userSchools: this.props.data.schools,
      });
    }
  }

  dragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const category = this.state.userSchools[source.droppableId];
    console.log(category);
    // const newCategroyIds = Array.from(category.id)
  };
  render() {
    // console.log(this.props.data.categories);
    console.log(this.state.userSchools);
    // if (this.props.data === null) return <h1>Loading</h1>;
    return (
      <div>
        <DragDropContext onDragEnd={this.dragEnd}>
          <Container fluid="true" className="categories-container">
            <Row className="categories-row">
              {this.props.data.categories.map((category) => (
                <Col md={4}>
                  <UserCategoryCard
                    category={category}
                    schools={this.props.data.schools}
                    removeSchool={this.props.removeSchool}
                    removeCategory={this.props.removeCategory}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </DragDropContext>
      </div>
    );
  }
}
