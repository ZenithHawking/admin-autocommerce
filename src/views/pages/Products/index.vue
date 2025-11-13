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
            <CTableHeaderCell scope="col">Dòng xe</CTableHeaderCell>
            <CTableHeaderCell scope="col">Giá tiền</CTableHeaderCell>
            <CTableHeaderCell scope="col">Người bán</CTableHeaderCell>
            <CTableHeaderCell scope="col">Thao tác</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          <CTableRow v-for="(product, index) in products" :key="index">
            <CTableDataCell>{{ product.ten }}</CTableDataCell>
            <CTableDataCell>{{ product.dongxe }}</CTableDataCell>
            <CTableDataCell>{{ product.giatien }}</CTableDataCell>
            <CTableDataCell>{{ product.nguoiban }}</CTableDataCell>
            <CTableDataCell>
              <button class="btn btn-warning btn-sm me-2" @click="editProduct(product)">Chỉnh sửa</button>
              <button class="btn btn-danger btn-sm me-2" @click="deleteProduct(product)">Xóa</button>
              <button class="btn btn-primary btn-sm" @click="viewDetails(product)">Chi tiết</button>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: [
        { ten: "Honda Civic", dongxe: "Sedan", giatien: "700,000,000", nguoiban: "@mdo" },
        { ten: "Toyota Vios", dongxe: "Sedan", giatien: "550,000,000", nguoiban: "@fat" },
        { ten: "Mazda CX5", dongxe: "SUV", giatien: "850,000,000", nguoiban: "@twitter" },
      ],
    };
  },
};
</script>

