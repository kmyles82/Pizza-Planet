<template>
    <div class="row">
        <div class="col-sm12 col-md-6">
            <!-- new pizza components -->
        </div>
        <div class="col-sm12 col-md-6">
            <h3>Menu</h3>
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>
                            Item
                        </th>
                        <th>
                            Remove from menu
                        </th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>Margherita</td>
                        <td>
                            <button class="btn btn-sm btn-outline-danger">X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Admin',
    data(){
        return{

        }
    }
}
</script>

<style>

</style>
