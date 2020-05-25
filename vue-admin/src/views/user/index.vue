<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="195">
        <!-- <template slot-scope="scope">{{ scope.$index }}</template> -->
        <template slot-scope="scope">{{ scope.row._id }}</template>
      </el-table-column>
      <el-table-column label="用户名">
        <template slot-scope="scope">{{ scope.row.username }}</template>
      </el-table-column>
      <el-table-column label="真实姓名">
        <template slot-scope="scope">{{ scope.row.realname }}</template>
      </el-table-column>
      <el-table-column label="创建时间">
        <template slot-scope="scope">{{ scope.row.createTime | format }}</template>
      </el-table-column>
      <!-- <el-table-column label="创建时间">
        <template slot-scope="scope">{{ scope.row.createdAt }}</template>
      </el-table-column>-->
      <el-table-column label="操作">
        <!-- <template slot-scope="scope">{{ scope.row.username }}</template> -->
      </el-table-column>
      <!-- <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.pageviews }}</template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
import { userList } from "@/api/user";
import moment from "moment";
moment.locale("zh-cn");

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    };
  },
  created() {
    this.fetchData();
  },
  filters: {
    format(val) {
      // console.log("val: ", moment(val).format("LLLL"));
      return moment(val).format("YYYY-MM-DD h:mm:ss");
      // return moment(val).fromNow();
    }
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      userList().then(response => {
        this.list = response.data;
        this.listLoading = false;
      });
    }
  }
};
</script>
