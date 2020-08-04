class VisitorManager {

    constructor() {
        this.visitors = [];
    }

    addVisitor(visitor) {
        this.visitors.push(visitor);
        return this;
    }

    getVisitorByConnectionId(connectionId) {
        return this.visitors.find(item => item.connectionId === connectionId);
    }

    removeVisitorByConnectionId(connectionId) {
        this.visitors = this.visitors.filter(visitor => visitor.connectionId !== connectionId);
        return this;
    }
}

const visitorManager = new VisitorManager();

module.exports = visitorManager;