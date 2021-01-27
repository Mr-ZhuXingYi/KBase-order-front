<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      align="center"
  >
    <el-table-column
        type="index"
        label="序号"
        width="50"
        align="center">
    </el-table-column>
    <el-table-column
        label="订单号"
        sortable
        width="300"
        align="center">
      <template slot-scope="scope">
        <el-tag @click.native="viewKb(scope.row)">
          {{ scope.row.order_num }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column
        prop="create_time"
        label="提交时间"
        sortable
        width="180"
        align="center">
    </el-table-column>
    <el-table-column
        prop="order_amount"
        label="订单金额"
        sortable
        width="100"
        align="center"
    >
    </el-table-column>
    <el-table-column
        prop="goods_name"
        label="商品名"
        sortable
        width="100"
        align="center"
    >
    </el-table-column>

    <el-table-column
        prop="goods_prices"
        label="商品价格"
        sortable
        width="100"
        align="center"
    >
    </el-table-column>

    <el-table-column
        prop="goods_count"
        label="商品数量"
        sortable
        width="100"
        align="center"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      tableData: [{
        order_num: '1111111',
        order_amount: '560',
        goods_name: 'http://www.baidu.com?search=3'
      }]
    }
  },
  methods: {
    nextPage: function (search, flag, size) {
      clearInterval(this.timeOut);
      if (this.current === 1 && flag === 0 && search === "" && this.preSearch === "") {
        return
      }
      let cursor = 0
      if (flag === -1) {
        this.preCurs.pop()
        cursor = this.preCurs.pop()
        this.current -= 1

      } else if (flag === 1) {
        cursor = this.nextCursor
        this.current += 1
      } else {
        this.current = 1
      }
      this.axios.get(this.api.OrderList, {
        params: {key: 2}
      }).then(res => {
        this.data = res.data.data
        this.nextCursor = res.data.next
        this.nextDisable = this.nextCursor === 0;
        this.preCurs.push(res.data.current)

      })

      this.timeOut = setInterval(() => {
        this.update()
      }, 1000);
      this.preSearch = search
      this.preDisable = this.current <= 1;
    },


    editKb: function (kb) {
      this.$router.push({name: 'edit', query: {id: kb.kb_id}})
    },
    mangerKb: function (kb) {
      this.$router.push({name: 'manger', query: {id: kb.kb_id}})
    },
    viewKb: function (kb) {
      //alert(kb.kb_name)
      this.$router.push({name: 'detail', query: {id: kb.kb_id}})
    }
  },
  mounted() {
    this.tableData = JSON.parse('{"code":10000,"result":[{"order_num":1611216059850345000,"create_time":"2021-01-21T16:01:00Z","order_amount":560,"goods_name":"2","goods_prices":560,"goods_count": 1},{"kb_id":90,"kb_name":"Linux","join_time":"2021-01-21 14:45:56","can_edit":"N","creator_id":10001},{"kb_id":91,"kb_name":"LINUX","join_time":"2021-01-21 14:45:58","can_edit":"Y","creator_id":10002},{"kb_id":92,"kb_name":"Linux","join_time":"2021-01-21 14:46:00","can_edit":"Y","creator_id":10004},{"kb_id":93,"kb_name":"Linux","join_time":"2021-01-21 14:46:23","can_edit":"Y","creator_id":10005},{"kb_id":94,"kb_name":"Linux","join_time":"2021-01-21 14:46:35","can_edit":"Y","creator_id":10009},{"kb_id":95,"kb_name":"Linux","join_time":"2021-01-21 14:46:39","can_edit":"Y","creator_id":10010},{"kb_id":96,"kb_name":"Linux","join_time":"2021-01-21 14:46:40","can_edit":"Y","creator_id":10011},{"kb_id":97,"kb_name":"Linux","join_time":"2021-01-21 14:46:42","can_edit":"Y","creator_id":10012},{"kb_id":98,"kb_name":"Linux","join_time":"2021-01-21 14:46:46","can_edit":"Y","creator_id":10013}]}').result
  }
}
</script>

<style scoped>

</style>
