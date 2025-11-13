<!-- <template>
    <CCard class="mb-4">
    <CCardBody>
            <div class=" mb-3 text-end">
                <u>Add New</u>
            </div>
            <CTable>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell scope="col">Tên</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Dòng xe</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Giá tiền</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Người bán</CTableHeaderCell>
                   <CTableHeaderCell scope="col">Chỉnh sửa</CTableHeaderCell>
                   <CTableHeaderCell scope="col">Thông tin</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Mark</CTableDataCell>
                  <CTableDataCell>Otto</CTableDataCell>
                  <CTableDataCell>@mdo</CTableDataCell>
                <CTableDataCell>
                  <button type="button" class="btn btn-warning me-2" title="{{ product.id }}" onclick="editProduct(product.id)">Edit</button>
                  <button type="button" class="btn btn-danger me-2" title="{{ product.id }}" onclick="deleteProduct(product.id)">Delete</button>
                </CTableDataCell>
                <CTableDataCell>
                  <button type="button" class="btn btn-primary" title="{{ product.id }}" onclick="deleteProduct(product.id)">Details</button>
                </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>Jacob</CTableDataCell>
                  <CTableDataCell>Thornton</CTableDataCell>
                  <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">3</CTableHeaderCell>
                  <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                  <CTableDataCell>@twitter</CTableDataCell>
                </CTableRow>
                </CTableBody>
                 

             
            </CTable>
        </CCardBody>
        </CCard>
</template> -->
<template>
  <CCard class="mb-4">
    <CCardBody>
      <div class="mb-3 text-end">
        <u style="cursor: pointer;">Add New</u>
      </div>

      <CTable>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">Tên</CTableHeaderCell>
            <CTableHeaderCell scope="col">Số điện thoại</CTableHeaderCell>
            <CTableHeaderCell scope="col">Địa chỉ</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            <CTableHeaderCell scope="col">Số sản phẩm</CTableHeaderCell>
            <CTableHeaderCell scope="col">Thao tác</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          <CTableRow v-for="(user, index) in users" :key="index">
            <CTableDataCell>{{ user.ten }}</CTableDataCell>
            <CTableDataCell>{{ user.sdt }}</CTableDataCell>
            <CTableDataCell>{{ user.diachi }}</CTableDataCell>
            <CTableDataCell>{{ user.email }}</CTableDataCell>
            <CTableDataCell>{{ user.sosanpham }}</CTableDataCell>
            <CTableDataCell>
              <button class="btn btn-warning btn-sm me-2" @click="editProduct(user)">Chỉnh sửa</button>
              <button class="btn btn-danger btn-sm me-2" @click="deleteProduct(user)">Xóa</button>
              <button class="btn btn-primary btn-sm" @click="viewDetails(user)">Chi tiết</button>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      users: [
        { ten: "kelvin", sdt: "0909.686.686", diachi: "HCM", email: "kelvin624@gmail,com" , sosanpham: 5 },
        { ten: "john", sdt: "0899.889.888", diachi: "HCM", email: "john7621@gmail.com" , sosanpham: 3 },
        { ten: "mary", sdt: "085.7777.888", diachi: "HCM", email: "mary180@gmail.com" , sosanpham: 8 },
      ],
    };
  },
};
</script>

