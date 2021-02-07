import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode:false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode:  true,
            status: this.props.status
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode:  false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </>
        )
    }

}

export default ProfileStatus;