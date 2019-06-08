import React, { Component } from 'react';

import DeleteIcon from '../../resources/delete-icon.png'
import CompleteIcon from '../../resources/complete-icon.png'
import ResetIcon from '../../resources/reset-icon.png'

module.exports = function(){
    this.state.id === ""
                            ?
                            <div className="task-card">
                                {
                                    this.state.description === "true"
                                        ?
                                        <React.Fragment>
                                            <h1 className="task-title" style={{ textDecoration: "line-through" }}>{this.state.name}</h1>
                                            <img className="complete-button" onClick={() => {
                                                this.resetTask(this.props)
                                            }
                                            } src={ResetIcon} alt="complete-button" />
                                        </React.Fragment>

                                        :
                                        <React.Fragment>
                                            <h1 className="task-title">{this.state.name}</h1>
                                            <img className="complete-button" onClick={() => {
                                                this.completeTask(this.props)
                                            }
                                            } src={CompleteIcon} alt="complete-button" />
                                        </React.Fragment>
                                }
                                <img className="delete-button" onClick={() => {
                                    this.deleteTask(this.props.id)
                                }
                                } src={DeleteIcon} alt="delete-button" />
                            </div>

                            :
                            <div />
}