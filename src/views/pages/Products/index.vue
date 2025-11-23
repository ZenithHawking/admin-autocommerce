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

<script setup>
import { ref, onMounted } from "vue";

const products = ref([]);

const getProducts = async () => {
  try {
    const response = await fetch("https://apihoavan.xyz/api/products");
    const data = await response.json();
    products.value = data.map(item => ({
      ten: item.title,
      dongxe: item.make,
      giatien: item.price,
      nguoiban: item.seller || "-", // nếu API có seller
    }));
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
  }
};

// Hàm thao tác nút
const editProduct = (product) => console.log("Chỉnh sửa:", product);
const deleteProduct = (product) => console.log("Xóa:", product);
const viewDetails = (product) => console.log("Chi tiết:", product);

onMounted(() => {
  getProducts();
});
</script>

