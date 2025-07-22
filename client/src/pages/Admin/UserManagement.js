// Pseudocode for UserManagement.js
IMPORT React, useState, useEffect from 'react'
IMPORT api from '../../utils/api.js'
IMPORT Table from '../../components/Table.js' // Generic Table component

FUNCTION UserManagement():
    state = useState({ users: [], filters: { name: '', email: '', address: '', role: '' }, sort: { field: 'name', order: 'asc' }, loading: true, error: null })
    users, filters, sort, loading, error = state variables

    useEffect:
        fetchUsers()

    FUNCTION fetchUsers():
        setState({ loading: true, error: null })
        try:
            params = { ...filters, sortField: sort.field, sortOrder: sort.order }
            response = api.get('/admin/users', { params: params })
            setState({ users: response.data.users })
        CATCH error:
            setState({ error: error.response.data.message || 'Failed to fetch users.' })
        FINALLY:
            setState({ loading: false })

    FUNCTION handleFilterChange(e):
        setState({ filters: { ...filters, [e.target.name]: e.target.value } })
        // Debounce or trigger fetchUsers after change

    FUNCTION handleSort(field):
        newOrder = sort.field === field && sort.order === 'asc' ? 'desc' : 'asc'
        setState({ sort: { field: field, order: newOrder } })
        // Trigger fetchUsers after sort change

    FUNCTION handleDeleteUser(userId):
        // Confirmation dialog
        IF confirm("Are you sure you want to delete this user?"):
            try:
                api.delete(`/admin/users/${userId}`)
                fetchUsers() // Refresh list
                alert('User deleted successfully.')
            CATCH error:
                alert('Failed to delete user: ' + (error.response.data.message || 'Server error.'))

    // Define table columns
    columns = [
        { header: 'Name', accessor: 'name', sortable: true },
        { header: 'Email', accessor: 'email', sortable: true },
        { header: 'Address', accessor: 'address', sortable: true },
        { header: 'Role', accessor: 'role', sortable: true },
        { header: 'Store Rating (if Store Owner)', accessor: 'rating' },
        { header: 'Actions', accessor: 'actions' } // For edit/delete buttons
    ]

    RETURN (
        <DIV>
            <H2>User Management</H2>
            {/* Filter inputs */}
            <INPUT type="text" name="name" value={filters.name} onChange={handleFilterChange} placeholder="Filter by Name" />
            <INPUT type="email" name="email" value={filters.email} onChange={handleFilterChange} placeholder="Filter by Email" />
            <INPUT type="text" name="address" value={filters.address} onChange={handleFilterChange} placeholder="Filter by Address" />
            <SELECT name="role" value={filters.role} onChange={handleFilterChange}>
                <OPTION value="">All Roles</OPTION>
                <OPTION value="System Admin">System Admin</OPTION>
                <OPTION value="Normal User">Normal User</OPTION>
                <OPTION value="Store Owner">Store Owner</OPTION>
            </SELECT>
            <BUTTON onClick={fetchUsers}>Apply Filters</BUTTON>

            {loading ? <P>Loading users...</P> : error ? <P style={{ color: 'red' }}>{error}</P> : (
                <Table
                    data={users}
                    columns={columns}
                    onSort={handleSort}
                    currentSortField={sort.field}
                    currentSortOrder={sort.order}
                    renderActions={(user) => ( // Render function for actions column
                        <>
                            <BUTTON onClick={() => navigate(`/admin/users/edit/${user.id}`)}>Edit</BUTTON>
                            <BUTTON onClick={() => handleDeleteUser(user.id)}>Delete</BUTTON>
                        </>
                    )}
                />
            )}
            <BUTTON onClick={() => navigate('/admin/users/add')}>Add New User</BUTTON>
        </DIV>
    )