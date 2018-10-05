import React, {Component} from 'react';
import {fetchRoutes, createRoute, updateRoute,deleteRoute} from "../../actions";
import {connect} from "react-redux";
import _ from "lodash";
import {Button, Well} from 'react-bootstrap';
import RouteNew from "./route"
import BootstrapTable from 'react-bootstrap-table-next';
import CustomModal from '../../components/modal'
import {RoutesTableMeta} from "../../service/tableData"
import RouteView from "./route_view";


class Routes extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            type: "A",
            selected: [],
            selectedRow: null,
            initData: {},
            errors:{show:false,message:null}
        };

        this.handleAddShow = this.handleAddShow.bind(this);
        this.handleEditShow = this.handleEditShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.submitFormAction = this.submitFormAction.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.setError = this.setError.bind(this);
        this.handleView = this.handleView.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }
i

    componentDidMount() {
        this.props.fetchRoutes();
    }

    /*error div operations*/
    setError(){
        this.setState({type:null});
        this.setState({error:{show:true,message:"Please select an item to edit"}})
    }

    /*set state to close the modal*/
    handleClose() {
        this.setState({show: false});
    }

    /*if add button is pressed the relevent data is stored in the state to open the modal*/
    handleAddShow() {
        this.setState({
            show: true, type: "add", initData: {
                "routeUp": [],
                "routeDown": [],
                "routeNumber":" " }
        });
    }

    /*if view button is pressed the relevent data is stored in the state to ope the modal*/
    handleView(){
        this.setState({show:true,type:"view"});
        console.log(this.state.type);

    }

    /*if edit button is pressed the relevent data is stored in the state to open the modal*/
    handleEditShow() {
        this.setState({show: true, type: "edit", initData: this.state.selectedRow});
    }

    /*listens to the radio button on the table to recieve the selected row*/
    handleSelected(row) {
        this.setState({selected: [row.routeId], selectedRow: row});
    }

    /*calls the action creator to create a record*/
    submitFormAction(values) {
        this.props.createRoute(values);
        this.setState({show: false});
    }

    /*calls the action creator to update id the changed values*/
    updateForm(values) {
        this.props.updateRoute(values);
        this.setState({show: false});
    }

    /*calls the action creator to delete with the id*/
    handleDelete(){

        this.props.deleteRoute(this.state.selectedRow.routeId);
        this.setState({show: false});
    }


    renderModal() {
        const {show, selectedRow, type, initData,errors} = this.state;
        console.log("in render modal " + type)
        /*if the user has clicked add button*/
        if (type === "add") {

            /*renders the componant inside the modal*/
            return (
                <div>
                    <CustomModal show={show} handleClose={this.handleClose} Title="Add New Route">
                        <RouteNew initData={initData} handleClose={this.handleClose}
                                submitFormAction={this.submitFormAction}/>
                    </CustomModal>
                </div>
            );

        }
        /*if the user has clicked edit button*/
        else if (type === "edit") {
            if (selectedRow === null) {
                console.log("error")
                this.setError();
                console.log(errors,type)
            }
            else if(initData != null) {
                /*renders the componant inside the modal*/
                return (
                    <div>
                        <CustomModal show={show} handleClose={this.handleClose} Title="Edit Route">
                            <RouteNew initData={initData} handleClose={this.handleClose}
                                    submitFormAction={this.updateForm}/>
                        </CustomModal>
                    </div>
                );
            }
        }
        /*if the user has clicked view button*/
        else if (type === "view") {
            /*renders the componant inside the modal*/
                return (
                    <div>
                        <CustomModal show={show} handleClose={this.handleClose} Title="View Route">
                            <RouteView handleDelete={this.handleDelete} route={selectedRow}/>
                        </CustomModal>
                    </div>
                );

        }
    }

    render() {

        const {selected,errors} = this.state;


        let selectRow = {
            mode: 'radio',
            selected: selected,
            onSelect: (row) => {
                this.handleSelected(row)
            },
            bgColor: '#D9D9D9'

        }


        if (!this.props.routes) {
            return <div>Loading..</div>;

        }

        return (

            <div>
               <div>
                    {errors.show && <div>
                        {errors.message}
                    </div>}
                </div>
                <div>

                    {this.renderModal()}
                </div>


                <div>
                    <BootstrapTable keyField='roueId' data={_.values(this.props.routes)} columns={RoutesTableMeta}
                                    selectRow={selectRow}/>
                </div>

                <div className="form-group">
                    <Button bsStyle="primary" bsSize="large" onClick={this.handleAddShow}>
                        Add
                    </Button>
                    <Button bsStyle="primary" bsSize="large" onClick={() => this.handleEditShow()}>
                        Edit
                    </Button>
                    <Button bsStyle="primary" bsSize="large" onClick={this.handleDelete}>
                        Delete
                    </Button>
                    <Button bsStyle="primary" bsSize="large" onClick={this.handleView}>
                        View
                    </Button>
                </div>

            </div>

        );
    }
}

function mapStateToProps(state) {
    return {routes: state.routes};
}

export default connect(mapStateToProps, {fetchRoutes, createRoute, updateRoute,deleteRoute})(Routes);